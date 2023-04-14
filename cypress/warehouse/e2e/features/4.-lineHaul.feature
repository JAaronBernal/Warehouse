Feature: Line Haul

  Scenario Outline: Success on Warehouse to Line Haul
    Given User open the Warehouse page in "<environment>"  
    When User select the "<station>"
    Then User synchronizes the "<lineHaul>" "<newNameLineHaul>" "<driver>" "<idVehicle>" "<destination>" "<destination2>" "<DepTime>" "<reEditName>" "<reEditIdVehicle>" "<reDest1>" "<reEditDriver>"

    Examples: 
      |environment | station|lineHaul|newNameLineHaul|driver       |idVehicle|destination|destination2|depTime            |reEditName|reEditIdVehicle|reDest1|reEditDriver|
      |Test        | MX4    |QA      |TAE            |Alexis Pat   |PDT2434  |MX5        |MX4         |2023-04-13T16:00:00|QAR       |LUF2997        |MX4    |Alexis Pat  |