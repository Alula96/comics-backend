/**
 * The model used to map issues from COMICVINE API to custom format.
 */
const IssueDetails = class { 

  /**
   * Model's constructor.
   * @param {*} issue original issue data from COMICVINE API
   */
  constructor({ api_detail_url, date_added, description, id, image: { original_url }, issue_number, name, character_credits, team_credits, location_credits, concept_credits }) {
    this.cover = original_url;
    this.date = date_added;
    this.name = `${name} #${issue_number}`;
    this.description = description;
    this.id = id;
    this.detailUrl = api_detail_url;
    this.characterCredits = character_credits;
    this.teamCredits = team_credits;
    this.locationCredits = location_credits;
    this.conceptCredits =concept_credits;
  }
};

module.exports = {
  IssueDetails
};