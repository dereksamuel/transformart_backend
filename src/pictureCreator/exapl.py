import cv2 as cv
import numpy as np

capture = cv.VideoCapture(0)
picture = cv.imread("./img/fondo_moradi.jpg", cv.IMREAD_GRAYSCALE)
height, width = np.shape(picture) # It returns the height and width of any image

while True:
  success, image = capture.read()

  if success:
    result = cv.matchShapes(image, picture, cv.TM_CCOEFF_NORMED)
    min, max, position_min, position_max = cv.minMaxLoc(result)

    left_top_pixel = position_max
    right_bottom_pixel = (position_max[0] + width, position_max[1] + height)

    cv.rectangle(
      image,
      pt1=left_top_pixel,
      pt2=right_bottom_pixel,
      color=255,
      thickness=4
    )

    cv.imshow("Video", image)
  else:
    print("Error starting VIDEO")
    break
  if cv.waitKey(20) & 0xFF == ord("q"): # ord return a 32-bit integer
    break

capture.release()
cv.destroyAllWindows()
