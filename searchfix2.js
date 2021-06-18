//Adds a second search block to the page where the WSYWIG would strip it out on user edit

const addSearch2 = function() {
  // element found in the third row of the home page user template
  const search2Element = document.querySelector('.block-search2');
  // if the element exists, add the search form to it
  if (search2Element) {
    search2Element.innerHTML = `<form class="search-form" method="post" action="index.cfm?method=ClassListing.ClassListingDisplay" name="searchNav" id="searchNav2">
    <label for="keywords" class="sr-only">search for a class</label>
    <input type="text" value="" placeholder="search for a class..." id="keywords2" name="keywords" class="input-text" title="Search for a class.">
    <input type="submit" name="submit" value="GO ›" id="searchClassSubmit2" class="input-submit button button-color">
  </form>`;
}
};

$(document).ready(addSearch2());
