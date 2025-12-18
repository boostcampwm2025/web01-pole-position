export const COHORT_ORG_MAP: Record<number, string[]> = {
  6: ['boostcampwm-2021'],
  7: ['boostcampwm-2022'],
  8: ['boostcampwm2023'],
  9: ['boostcampwm-2024'],
  10: ['boostcampwm2025'],
  11: ['0x05-hex-five'],
};

export function resolveCohortFromOrgs(orgLogins: string[]): number | null {
  for (const [cohortStr, orgs] of Object.entries(COHORT_ORG_MAP)) {
    const cohort = Number(cohortStr);
    if (orgs.some((org) => orgLogins.includes(org))) {
      return cohort;
    }
  }

  return null;
}
