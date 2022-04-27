import cv2 as cv
import numpy as ny

blank = ny.zeros([500, 500, 3], dtype="uint8") # returs a matrix, this is the concept of images 50x50
blank2 = ny.zeros([500, 500, 3], dtype="uint8")
img = cv.imread("img/fondo_moradi.jpg")

# 1. Paint the image in cv2
blank2[100:250, 50:250] = 0, 255, 15

cv.imshow("Green", blank2) # shows any image
cv.imshow("", img) # shows any image

# 2. Draw a Rectangule
cv.rectangle(blank, (0, 0), (250, 250), (0, 255, 0), thickness=2)
cv.imshow("Rectangle", blank)

cv.waitKey(0) # it is closed when any key is pressed
