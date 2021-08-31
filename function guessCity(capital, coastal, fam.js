function guessCity(capital, coastal, famous, ancient) 
{
    if(capital == true && famous == true && ancient == true && coastal == false){return "Jerusalem";}
    else if(famous == true && coastal == true && capital == false && ancient == false){return "Tel aviv";}
    else if(ancient == true && coastal == true && famous == false && capital == false) {return "Acre";}
    else if(capital == false && coastal == false && famous == false && ancient == true){return "Katzrin"}
    else if(capital == false && coastal == true && famous == false && ancient == false){return "Zikim"}
     else if(capital == false && coastal == false && famous == false && ancient == false){return "Musmus"}
}
/*The arguments are all true or false. The return value is the name of the city.
Jerusalem is ancient, famous and a capital
Tel Aviv is famous and coastal
Acre is coastal and ancient
Katzrin is ancient
Zikim is coastal
Musmus is not any of the above*/
function main()
{
const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
]
let winners = formula1Champions.forEach(countWin);

}
function countWin(driver) 
{
    // your code goes here
    let sum = 0;
    for(let i = 0; i < formula1Champions.length; i++)
        {
            if(driver === formula1Champions[i])
            {
                sum++;
            }
        }
        return sum;
}

