package com.day.projectmanagementsystem.controller;

import com.day.projectmanagementsystem.config.JwtProvider;
import com.day.projectmanagementsystem.modal.User;
import com.day.projectmanagementsystem.repoistory.UserRepository;
import com.day.projectmanagementsystem.request.LoginRequest;
import com.day.projectmanagementsystem.response.AuthResponse;
import com.day.projectmanagementsystem.service.CustomeUserDetailsImpl;
import com.day.projectmanagementsystem.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomeUserDetailsImpl customeUserDetails;

    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping("/signup")
    public ResponseEntity<User> createUserHandler(@RequestBody User user) throws Exception {
      User isUserExist = userRepository.findByEmail(user.getEmail());

      if (isUserExist != null) {
          throw new Exception("email already exist with another account");
      }

      User createdUser = new User();
      createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
      createdUser.setEmail(user.getEmail());
      createdUser.setFullName(user.getFullName());

      User savedUser = userRepository.save(createdUser);

      subscriptionService.createSubscription(savedUser);

      Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());

      SecurityContextHolder.getContext().setAuthentication(authentication);

      String jwt = JwtProvider.generateToken(authentication);

      AuthResponse res = new AuthResponse();
      res.setMessage("signup success");
      res.setJwt(jwt);

      return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
  }

    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> signing(@RequestBody LoginRequest loginReguest) throws Exception {
        String username = loginReguest.getEmail();
        String password = loginReguest.getPassword();

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);

        AuthResponse res = new AuthResponse();
        res.setMessage("signin success");
        res.setJwt(jwt);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customeUserDetails.loadUserByUsername(username);
        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username or password");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
