import { programs, profiles, roles } from "./lib/collections";
​
export default async () => {
  const { _id: mentorPlus2020ProgramID } = await programs.findOne({
    name: "MentorPlus 2020",
  });
​
  await roles.forEach(
    {
      programID: mentorPlus2020ProgramID,
    },
    async (role) => {
      const correspondingProfile = await profiles.findOne({
        _id: role.profileId,
      });
​
      if (
        correspondingProfile !== null &&
        correspondingProfile.displayName !== null
      ) {
        try {
          await updateRoleProfileWithRedactedName(role, correspondingProfile);
          await updateFullNameOfRole(role, correspondingProfile.name);
        } catch {
          console.log(
            "AN ERROR HAS HAPPPENED WHILST TRYING TO UPDATE THIS ROLE AND PROFILE:"
          );
          console.log(correspondingProfile);
          console.log(role);
        }
      } else if (correspondingProfile === null) {
        console.log("the profile for this role is null:", role);
      }
    }
  );
};
​
async function updateRoleProfileWithRedactedName(role, profile) {
  let redactedName = redactForDisplay(profile.displayName);
  console.log(redactedName + `       ----profile ID = ${profile._id}`); //keep this for quick log
  const updated = await profiles.update(
    {
      _id: role.profileId,
    },
    {
      name: redactedName,
      displayName: redactedName,
    }
  );
  if (!updated) {
    console.log(
      "AN ERROR HAS HAPPPENED WHILST TRYING TO UPDATE THE NAMES OF THIS PROFILE:",
      profile
    );
  }
}
​
const redactForDisplay = (name) => {
  return name !== null ? name.split(" ")[0] : name;
};
​
async function updateFullNameOfRole(role, originalName) {
  if (role.fullName === null) {
    const updated = await roles.update(
      {
        _id: role._id,
      },
      {
        fullName: originalName,
      }
    );
    if (!updated) {
      console.log(
        "AN ERROR HAS HAPPENED WHILST UPDATING THE FULLNAME, Check this role:",
        role
      );
    }
  }
}