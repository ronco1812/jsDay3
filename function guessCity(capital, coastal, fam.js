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
