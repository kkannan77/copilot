function skillsMember() {
  return {
    name: "John Doe",
    skills: ["HTML", "CSS", "JavaScript"],
    addSkill(skill) {
      this.skills.push(skill);
    },
    editSkill(oldSkill, newSkill) {
      const index = this.skills.indexOf(oldSkill);
      this.skills[index] = newSkill;
    },
    deleteSkill(skill) {
      const index = this.skills.indexOf(skill);
      this.skills.splice(index, 1);
    }
  };
}