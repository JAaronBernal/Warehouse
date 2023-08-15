Feature: Induction

  Scenario Outline: Success on induction
    Given A user open the induction page in "<environment>" selected 
    When the user must be at the selected "<station>"
    Then user should induction "<environment>"

    Examples: 
      |environment    | station|
      |E2ETest        | MX5    |



     