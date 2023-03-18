import DashboardLayout from "../../components/DashboardLayout";
import { useUserAuth } from "../../contexts/UserAuthContext";

const WriteNew = () => {
  const { user } = useUserAuth();
  console.log("we are in writenew");
  console.log(user);
  return (
    <>
      <DashboardLayout>
        <div>
          <h1>Write New</h1>
          <h5>{user.email}</h5>
        </div>
      </DashboardLayout>
    </>
  );
};

export default WriteNew;
