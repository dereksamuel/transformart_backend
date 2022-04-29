from email.mime import image
from tokenize import endpats
import cv2 as cv
import numpy as ny

# BGR

blank = ny.zeros([600, 700, 3], dtype="uint8") # returs a matrix, this is the concept of images 50x50
blank2 = ny.zeros([500, 500, 3], dtype="uint8")
img = cv.imread("img/fondo_moradi.jpg")

# 1. Paint the image in cv2
blank[:] = 255, 255, 255
blank2[100:500, 250:500] = 0, 255, 15

cv.imshow("Green", blank2) # shows any image
cv.imshow("", img) # shows any image

print(blank.shape[1] // 2, blank.shape[0] // 2)

# 2. Draw a Rectangule

cv.rectangle(
  img=blank,
  pt1=(0, 0),
  pt2=(blank.shape[1] // 2, blank.shape[0] // 2),
  color=(0, 0, 255),
  thickness=8
)

cv.imshow("Rectangle", blank)

# 3. Draw a Line
cv.line(
  img=blank,
  pt1=(0, 0),
  pt2=(blank.shape[1] // 2, blank.shape[0] // 2),
  color=(0, 0, 0),
  thickness=2
)

cv.line(
  img=blank,
  pt1=(blank.shape[1] // 2, 0),
  pt2=(0, blank.shape[0] // 2),
  color=(0, 0, 0),
  thickness=2
)

cv.imshow("Line", blank)

# 4. Draw a circle
cv.circle(
  img=blank,
  center=(blank.shape[1] // 4, blank.shape[0] // 4),
  radius=40,
  color=(0, 0, 255),
  thickness=-1
)
cv.imshow("Circle", blank)

# Write Text
cv.putText(
  img=blank,
  text="Hello World",
  org=(25, blank.shape[1] // 2),
  fontFace=cv.FONT_HERSHEY_DUPLEX,
  fontScale=1.0,
  color=(0, 255, 0),
  thickness=3
)

cv.imshow("Text", blank)

cv.waitKey(0) # it is closed when any key is pressed
