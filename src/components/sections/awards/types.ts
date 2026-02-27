export type AwardCategory = "Academic Excellence" | "Technical Competitions" | "Leadership & Contribution";

export interface Award {
    id: string;
    title: string;
    issuer: string;
    year: string;
    category: AwardCategory;
    impact: string;
    link?: string;
}
