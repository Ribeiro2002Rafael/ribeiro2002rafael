import os
import shutil

def get_folder_size(path):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            if os.path.exists(fp):
                total_size += os.path.getsize(fp)
    return total_size

def format_size(size_bytes):
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if size_bytes < 1024:
            return f"{size_bytes:.2f} {unit}"
        size_bytes /= 1024

folder_path = r"C:\Users\rafael.ribeiro\AppData\Local\ESRI\Local Caches"

if os.path.basename(folder_path) == "Local Caches":
    if os.path.exists(folder_path):
        size = get_folder_size(folder_path)
        print(f"Tamanho da pasta antes de apagar: {format_size(size)}")
        try:
            shutil.rmtree(folder_path)
            print("Pasta 'Local Caches' apagada com sucesso.")
        except PermissionError:
            print("Erro: Não tens permissões para apagar esta pasta. Fecha o ArcGIS e tenta novamente.")
        except Exception as e:
            print(f"Erro ao apagar a pasta: {e}")
    else:
        print("A pasta 'Local Caches' já não existe.")
else:
    print("Operação abortada: Caminho inesperado.")
