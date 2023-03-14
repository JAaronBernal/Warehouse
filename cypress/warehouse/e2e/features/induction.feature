Feature: Induction

  Scenario Outline: Success on induction
    Given A user open the induction page in "<environment>" selected 
    When the user must be at the selected "<station>"
    Then user should induction a "<numOrder>"

    Examples: 
      |environment | station|numOrder|
      |Test        | MX5    |1863372085|