function doGet(e) {
    return HtmlService
        .createTemplateFromFile("page")
        .evaluate();
}

function image(): string {
    return "a";
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
