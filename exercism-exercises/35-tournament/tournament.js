function tournamentTally(input) {
    let handler = new ResultHandler();
    return handler.handleResult(input);
}

class Team {

    constructor(teamName) {
        this.teamName = teamName;
        this.matchesPlayed = 0;
        this.matchesWon = 0;
        this.matchesLost = 0;
        this.matchesTied = 0;
        this.points = 0;
    }

    updateTeamStatisticsBasedOnInput(matchResult) {
        switch (matchResult) {
            case 'win':
                this.matchesWon += 1;
                this.points += 3;
                break;
            case 'loss':
                this.matchesLost += 1;
                this.points += 0;
                break;
            case 'draw':
                this.matchesTied += 1;
                this.points += 1;
                break;
            default:
                throw new Error('Unexpected match result');
        }
        this.matchesPlayed += 1;
    }

    showTeamResults() {
        if (this.points > 9) {
            return `${this.teamName.padEnd(31)}|  ${this.matchesPlayed} |  ${this.matchesWon} |  ${this.matchesTied} |  ${this.matchesLost} | ${this.points}`;
        } else {
            return `${this.teamName.padEnd(31)}|  ${this.matchesPlayed} |  ${this.matchesWon} |  ${this.matchesTied} |  ${this.matchesLost} |  ${this.points}`;
        }
    }
}

class ResultHandler {
    static RESULT_HEADER = `Team ` + ' '.repeat(26) + `| MP |  W |  D |  L |  P`;

    constructor() {
        this.teams = new Map();
    }

    createTeam(teamName) {
        this.teams.set(teamName, new Team(teamName));
    }

    handleResult(input) {
        let arrayOfMatchResults = input.split('\n').filter(line => line.trim() !== '');

        for (let matchResult of arrayOfMatchResults) {
            let matchResultParts = matchResult.split(';');
            let firstTeam = matchResultParts[0];
            let secondTeam = matchResultParts[1];
            let result = matchResultParts[2];

            switch (result) {
                case 'win':
                    this.updateTeamResultOrCreateAndUpdate(firstTeam, result);
                    this.updateTeamResultOrCreateAndUpdate(secondTeam, 'loss');
                    break;
                case 'loss':
                    this.updateTeamResultOrCreateAndUpdate(firstTeam, result);
                    this.updateTeamResultOrCreateAndUpdate(secondTeam, 'win');
                    break;
                case 'draw':
                    this.updateTeamResultOrCreateAndUpdate(firstTeam, result);
                    this.updateTeamResultOrCreateAndUpdate(secondTeam, result);
                    break;
            }
        }
        return this.generateResultTable();
    }

    updateTeamResultOrCreateAndUpdate(teamName, result) {
        if (this.teams.has(teamName)) {
            let teamToUpdate = this.teams.get(teamName);
            teamToUpdate.updateTeamStatisticsBasedOnInput(result);
        } else {
            this.createTeam(teamName);
            let teamToUpdate = this.teams.get(teamName);
            teamToUpdate.updateTeamStatisticsBasedOnInput(result);
        }

    }

    sortTeamsBasedOnScore() {
        let teamsArray = Array.from(this.teams.values());
        teamsArray.sort((a, b) => {
            if (a.points === b.points) {
                return a.teamName.localeCompare(b.teamName);
            }
            return b.points - a.points;
        });

        return teamsArray;
    }

    generateResultTable() {
        let teamsArray = this.sortTeamsBasedOnScore();
        let table = ResultHandler.RESULT_HEADER;
        for (let i = 0; i < teamsArray.length; i++) {
            table += '\n' + teamsArray[i].showTeamResults();
        }
        return table;
    }

}

module.exports = {
    Team,
    ResultHandler,
    tournamentTally
}