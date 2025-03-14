import { currentUser } from "@clerk/nextjs/server";
import { LucideUser2 } from "lucide-react";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  }
  return <LucideUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
};
export default UserIcon;
