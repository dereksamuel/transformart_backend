import cv2 as cv
import numpy as ny

img = cv.imread("img/fondo_moradi.jpg")

cv.imshow("", img)

def translate(localImg, x, y):
  transMath = ny.float32([[1, 0, x], [0, 1, y]])
  dimensions = (localImg.shape[1], localImg.shape[0])
  return cv.warpAffine(localImg, transMath, dimensions)

## Guide Positions
# -x => Left
# x => Right
# -y => Up
# y => Down

translated = translate(img, 200, -450)
cv.imshow("Translated", translated)

cv.waitKey(0)
