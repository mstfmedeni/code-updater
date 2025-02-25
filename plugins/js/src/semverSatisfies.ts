import semver from "semver";

export const semverSatisfies = (
  targetAppVersion: string,
  currentVersion: string,
) => {
  const [targetBase, targetBuild] = targetAppVersion.split("+");
  const [currentBase, currentBuild] = currentVersion.split("+");

  const currentCoerce = semver.coerce(currentBase);
  const targetCoerce = semver.coerce(targetBase);

  if (!currentCoerce || !targetCoerce) {
    return false;
  }

  // Check if versions match according to semver rules (handles ranges and x patterns)
  const isVersionMatch = semver.satisfies(currentCoerce.version, targetBase);

  if (!isVersionMatch) {
    return false;
  }

  // If target version doesn't have a build number, ignore build numbers and return true
  if (!targetBuild) {
    return true;
  }

  // Otherwise, compare build numbers
  const targetBuildStr = targetBuild || "0";
  const currentBuildStr = currentBuild || "0";

  if (targetBuildStr.includes("x")) {
    const pattern = targetBuildStr
      .replace(/x/gi, "\\d")
      .replace(/\d/g, (match) => match);

    const regex = new RegExp(`^${pattern}$`);
    return regex.test(currentBuildStr);
  }

  const targetBuildNum = Number.parseInt(targetBuildStr, 10);
  const currentBuildNum = Number.parseInt(currentBuildStr, 10);

  if (Number.isNaN(targetBuildNum) || Number.isNaN(currentBuildNum)) {
    return false;
  }

  return currentBuildNum === targetBuildNum;
};
