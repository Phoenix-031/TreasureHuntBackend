type TeamDto = {
    teamId: string;
    teamName: string;
    members: Array<{
        espektroId: string;
        name: string;
    }>;
    leader: string;
    leaderEmail: string;
    espektroId: string;
    password: string;
};

type TeamUpdateDto = Partial<TeamDto>;
type TeamSchemaDto = Document & TeamDto;

export { TeamDto, TeamUpdateDto, TeamSchemaDto };
