let helper = (module.exports = {});
//not sure why line 6 is not exiting the program
helper.check = num => {
  console.log(num, "line 4, helper.js");
  if (typeof num !== "number") {
    return null;
  }
  return num;
};
