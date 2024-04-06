#método recebe string e array de símbolos como entrada. 
#interage com os dados e remove o texto que vem após cada símbolo encontrado na string.

def remover_texto_apos_simbolos(string, array_de_simbolos)
  unless string.is_a?(String) && array_de_simbolos.is_a?(Array) && array_de_simbolos.all? { |s| s.is_a?(String) }
    raise ArgumentError, "Os argumentos devem ser string e um array de strings."
  end

  array_de_simbolos.each do |simbolo|
    index = string.index(simbolo)
    string = string[0...index] if index
  end
  string.strip
end