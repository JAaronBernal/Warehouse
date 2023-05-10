Feature: Induction P99

  Scenario Outline: Success on induction to assert P99
    Given User open the induction page in "<environment>" selected 
    When the user must be at the selected "<station>" to work
    Then user should induction to assert P99

    Examples: 
      |environment | station|
      |Test        | MX1    |



     