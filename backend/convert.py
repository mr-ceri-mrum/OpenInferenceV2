from PIL import Image
import numpy as np
import potrace
import io

# Загружаем картинку
img = Image.open("logo.png").convert("L")  # в градации серого
bitmap = np.array(img) < 128  # бинаризуем

# Создаём трассировку
bmp = potrace.Bitmap(bitmap)
path = bmp.trace()

# Создаём SVG
with open("logo.svg", "w") as f:
    f.write('<?xml version="1.0" standalone="no"?>\n')
    f.write('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"\n')
    f.write('"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')
    f.write('<svg version="1.1" xmlns="http://www.w3.org/2000/svg">\n')
    
    for curve in path:
        f.write(f'<path d="{curve.tosvg()}" fill="black"/>\n')

    f.write('</svg>')
