require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game.rb")
require_relative("../card.rb")

class CardGameTest < MiniTest::Test

    def setup
        @card1 = Card.new("hearts", 7)
        @card2 = Card.new("clubs", 1)
        @cardgame = CardGame.new
        @cards = [@card1, @card2]
    end 

    def test_card_has_value
        assert_equal(7, @card1.value)
    end

    def test_card_has_suit
        assert_equal("hearts", @card1.suit)
    end

    def test_check_for_ace
       actual = @cardgame.check_for_ace(@card2)
       expected = true 
       assert_equal(expected, actual)
    end

    def test_highest_card
        actual = @cardgame.highest_card(@card1, @card2)
        expected = @card1
        assert_equal(expected, actual)
    end

    def test_cards_total
        actual = @cardgame.cards_total(@cards)
        expected = "You have a total of " + 8.to_s
        assert_equal(expected, actual)
    end
end