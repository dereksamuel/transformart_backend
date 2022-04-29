import cv2 as cv

capture = cv.VideoCapture(0)

while True:
  isReadable, image = capture.read()

  if isReadable:
    imageHSV = cv.cvtColor(image, cv.COLOR_BGR2HSV)
    cv.imshow("Video", image)

    if cv.waitKey(1) & 0xFF == ord("e"):
      break

capture.release()
cv.destroyAllWindows()
