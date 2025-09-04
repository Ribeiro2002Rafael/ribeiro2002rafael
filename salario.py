def calcular_desconto(dias_falta, retribuicao_mensal=1600):
    # Dados fixos: 35h semanais, 7h/dia
    horas_semanais = 35
    horas_dia = 7

    # Fórmula do art. 271.º CT: valor hora = (Rm * 12) / (52 * n)
    valor_hora = (retribuicao_mensal * 12) / (52 * horas_semanais)
    valor_dia = valor_hora * horas_dia

    # Cálculo do desconto (assume-se sempre falta com perda de retribuição)
    desconto_retribuicao = valor_dia * dias_falta

    salario_final = retribuicao_mensal - desconto_retribuicao

    return {
        "salario_base": round(retribuicao_mensal, 2),
        "valor_hora": round(valor_hora, 2),
        "valor_dia": round(valor_dia, 2),
        "desconto_retribuicao": round(desconto_retribuicao, 2),
        "salario_final": round(salario_final, 2)
    }

# Exemplo de utilização
if __name__ == "__main__":
    dias_falta = int(input("Introduza o nº de dias em falta: "))

    resultado = calcular_desconto(dias_falta)
    print("\n--- Resultado ---")
    for k, v in resultado.items():
        print(f"{k}: {v} €")
