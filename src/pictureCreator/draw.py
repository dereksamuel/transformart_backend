import cv2 as cv
import numpy as ny

# BGR

blank = ny.zeros([600, 700, 3], dtype="uint8") # returs a matrix, this is the concept of images 50x50
blank2 = ny.zeros([500, 500, 3], dtype="uint8")
img = cv.imread("img/fondo_moradi.jpg")

# 1. Paint the image in cv2
blank2[100:500, 250:500] = 0, 255, 15

cv.imshow("Green", blank2) # shows any image
cv.imshow("", img) # shows any image

print((blank.shape[1] // 2, blank.shape[1] // 2))

# 2. Draw a Rectangule
cv.rectangle(
  blank,
  (0, 0),
  (blank.shape[1] // 2, blank.shape[0] // 2),
  (0, 0, 255),
  thickness=-1)
cv.imshow("Rectangle", blank)

cv.waitKey(0) # it is closed when any key is pressed
