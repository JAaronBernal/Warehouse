Feature: Line Haul

  Scenario Outline: Success on Warehouse to Line Haul
    Given User open the Warehouse page in "<environment>"  
    When User select the "<station>"
    Then User synchronizes the "<lineHaul>" "<newNameLineHaul>" "<driver>" "<idVehicle>" "<destination>" "<destination2>" "<DepTime>" "<reEditName>" "<reEditIdVehicle>" "<reDest1>" "<reEditDriver>"

    Examples: 
      |environment | station|lineHaul|newNameLineHaul|driver       |idVehicle|destination|destination2|depTime            |reEditName|reEditIdVehicle|reDest1|reEditDriver|
      |Test        | MX4    |QAA     |TAE1           |Lendaly      |PDT2434  |MX5        |MX4         |2023-05-03T16:00   |QAR       |LUF2997        |MX4    |Lendaly     |