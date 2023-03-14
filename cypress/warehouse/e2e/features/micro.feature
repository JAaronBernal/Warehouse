Feature: Microsoft

  Scenario Outline: Success on Microsoft
    Given A user select the "<environment>"
    When the user open microsoft with credential  "<userM>" "<pwdM>"
    Then user login

    Examples: 
      |environment  |user                       | pwd   |
      |Micro        |jesus.bernal@99minutos.com | MX5   |