require 'rspec'
require_relative '../metodo/remover_texto'


describe '#remover_texto_apos_simbolos' do
  context 'Cenário 1' do
    it 'Remove texto após os marcadores corretamente' do
      string = "bananas, tomates # e ventiladores"
      marcadores = ["#", "!"]
      expect(remover_texto_apos_simbolos(string, marcadores)).to eq("bananas, tomates")
    end
  end

  context 'Cenário 2' do
    it 'Remove texto após os marcadores corretamente' do
      string = "o rato roeu a roupa $ do rei % de roma"
      marcadores = ["%", "!"]
      expect(remover_texto_apos_simbolos(string, marcadores)).to eq("o rato roeu a roupa $ do rei")
    end
  end

  context 'Cenário 3' do
    it 'Remove texto após os marcadores corretamente' do
      string = "the quick brown fox & jumped over * the lazy dog"
      marcadores = ["&", "*", "%", "!"]
      expect(remover_texto_apos_simbolos(string, marcadores)).to eq("the quick brown fox")
    end
  end
end