import SubscriptionCard from "./SubscriptionCard";

const paidPlan = [
  "무제한 프로젝트 추가",
  "라이브 채팅에 대한 액세스",
  "무제한 팀원 추가",
  "고급 보고",
  "우선 지원",
  "사용자 정의 옵션",
  "통합 지원",
  "고급 보안",
  "교육 및 리소스",
  "액세스 제어",
  "사용자 정의 워크플로",
];

const annualPlan = [
  "무제한 프로젝트 추가",
  "라이브 채팅에 대한 액세스",
  "무제한 팀원 추가",
  "고급 보고",
  "우선 지원",
  "월간 플랜에 포함된 모든 것",
];

const freePlan = [
  "프로젝트 3개만 추가",
  "기본 작업 관리",
  "프로젝트 협업",
  "기본 보고",
  "이메일 알림",
  "기본 액세스 제어",
];

const Subscription = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">가격</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planName: "무료",
            fetures: freePlan,
            planType: "FREE",
            price: 0,
            buttonName: true ? "현재 플랜" : "플랜 시작하기",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "한달 플랜",
            fetures: paidPlan,
            planType: "MONTHLY",
            price: 12923,
            buttonName: true ? "현재 플랜" : "플랜 시작하기",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "연간 플랜",
            fetures: annualPlan,
            planType: "ANNUALLY",
            price: 108553,
            buttonName: true ? "현재 플랜" : "플랜 시작하기",
          }}
        />
      </div>
    </div>
  );
};

export default Subscription;