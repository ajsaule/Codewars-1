import { programs, profiles, roles } from "./lib/collections";
"3,4,12,13,19,34,40,41,58,62"
​// Probably should name this function rather than an anon one
export default async function functionName() { // consistency in function expression or arrow syntax throughout... got a mix of both now
  const { _id: mentorPlus2020ProgramID } = await programs.findOne({
    name: "MentorPlus 2020",
  });
​
  await roles.forEach(
    {
      programID: mentorPlus2020ProgramID,
    }, // Is this a special forEach? Doesn't look like the standard callback syntax. If it's a custom roles function, maybe give it a different name
    async function(role) {
      const correspondingProfile = await profiles.findOne({
        _id: role.profileId,
      });
​
      if (
        // correspondingProfile !== null && // this first condition is redundant. the displayName check already confirms if correspondingProfile is valid
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
      } // What about when there's a correspondingProfile object, with a displayName of Null? Appears possible based on the functions below.
    }
  );
};
​
async function updateRoleProfileWithRedactedName(role, profile) {
  let redactedName = redactForDisplay(profile.displayName); // There's a possibility redactedName == null?
  console.log(`${redactedName}       ----profile ID = ${profile._id}`); //keep this for quick log
  // since you're already doing string interpolation, might as well lose the +
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
} // What's the implications of redactedName being null?
​
function redactForDisplay(name) { // Again, just to make it consistent, make them func expression syntax
  return name !== null ? name.split(" ")[0] : name;
}; // So this function takes a name and returns the first name. But sometimes it returns null?
​
async function updateFullNameOfRole(role, originalName) {
  if (role.fullName === null) {
    const updated = await roles.update( // I assume your update function searches for an id match, and updates that object's fullName key
      {
        _id: role._id,
      },
      {
        fullName: originalName,
      }
    );
    if (!updated) { // If a matching id isn't found, assigns null instead of an object to "updated"
      console.log(
        "AN ERROR HAS HAPPENED WHILST UPDATING THE FULLNAME, Check this role:",
        role
      );
    }
  }
} // Ok, fully understand this function. No issue