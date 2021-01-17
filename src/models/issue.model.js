/**
 * The model used to map issues from COMICVINE API to custom format.
 */
const Issue = class { 

  /**
   * Model's constructor.
   * @param {*} issue original issue data from COMICVINE API
   */
  constructor({ api_detail_url, date_added, description, id, image: { original_url }, issue_number, name }) {
    this.cover = original_url;
    this.date = date_added;
    this.name = `${name} #${issue_number}`;
    this.description = description;
    this.id = id;
    this.issueId = issue_number;
    this.detailUrl = api_detail_url;
  } 
};

module.exports = {
  Issue
};