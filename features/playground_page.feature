Feature: Playground page

    Scenario: Enter personal information
        Given I'm on the playground page for automation
        When I enter the my name "Alex Robledo", email "marbalexbriones@gmail.com", phone "1234567890" and address "My Home # 123"
        And I select my gender "Male" and choose my favorite day of the week "Friday"
        Then the information must be filled correctly