import { PageHeader } from "../../src/components/PageHeader/PageHeader";
import { Profile } from "../../src/components/Profile/Profile";
import { useStagesList } from "../../src/components/StagesList/StagesList";
import { AdminLayout } from "../../src/layouts/AdminLayout/AdminLayout";

export const ProfilePage: React.FC = () => {
  return (
    <AdminLayout>
      <Profile />
    </AdminLayout>
  );
};

export default ProfilePage;
