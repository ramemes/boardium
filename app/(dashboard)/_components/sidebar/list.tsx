"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    }  
  });
  console.log(userMemberships)

  if(!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => 
        <li key={mem.organization.id}>
          {mem.organization.name}
        </li>
      )}
    </ul>
  );
};

