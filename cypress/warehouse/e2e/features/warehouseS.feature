Feature: Warehouse

  Scenario Outline: Success on Warehouse S
    Given A user open the Warehouse S page in "<environment>" selected 
    When the user select the "<station>" to work S
    Then the user synchronizes this "<layout>" "<numContainer>" "<TransferPack>" "<fingerID>" "<ordeID>" "<secondOrderID>" "<lineHaul>" "<newNameLineHaul>" "<driver>" "<idVehicle>" "<destination>" "<destination2>" "<DepTime>" "<reEditName>" "<reEditIdVehicle>" "<reDest1>" "<reEditDriver>"

    Examples: 
      |environment | station|layout         |numContainer|TransferPack|fingerID   |ordeID    |secondOrderID|lineHaul|newNameLineHaul|driver       |idVehicle|destination|destination2|depTime            |reEditName|reEditIdVehicle|reDest1|reEditDriver|
      |Test        | MX1    |Layout-MX1.csv | 1          | NA         |TAE        |3017447413|guias        |QA      |TAE            |Alexis Pat   |PDT2434  |MX5        |MX4         |2023-04-17T16:00:00|QAR       |LUF2997        |MX4    |Alexis Pat  |



    

