import type { NextPage } from "next";
import { LoginForm } from "../components/pageLogin/LoginForm";
import { H1 } from "../components/shared/Texts";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-backgroundColor flex flex-col justify-center items-center gap-7">
      <div className="flex font-bold">
        <H1 className="text-primary-white">{`Web-`}</H1>
        <H1 className="text-primary-pink">{`Portal`}</H1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Home;
