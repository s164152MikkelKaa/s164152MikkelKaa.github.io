findAllCurAge(".theAgeGet");

function findAllCurAge(theBaseElementName){
    //const theElementList = document.getElementsByName(theBaseElementName);
    //const theElementList = document.getElementsByClassName(theBaseElementName);
    const theElementList = document.querySelectorAll(theBaseElementName);
    // Gets a nodeList of everything that got "theBaseElementName" someware in their class.
    theElementList.forEach(
        function(theElement){
            var theDateText = theElement.getAttribute("data-the-date");
            // All elements that is to use this needs to have the attribute data-the-date, the value is the date in ISO format ("YYYY-MM-DD").
            if(!(theDateText == null || theDateText == "")){
                var theDate = new Date(theDateText);
                var theTimeDiff = Date.now() - theDate.getTime();
                theDate.setTime(theTimeDiff);
                var theTimeDiffYear = theDate.getFullYear();
                var theYearDiff = Math.abs(theTimeDiffYear - 1970);
                theElement.innerHTML = theYearDiff.toString();
                //theElement.innerHTML = theDate.toLocaleDateString();
            }
        }
    );
}