// #include <graphics.h>

const unsigned int WIDTH = 600;
const unsigned int HEIGHT = 600;
unsigned int BUFFER[WIDTH * HEIGHT];

void refresh_buffer(unsigned int color_left, unsigned int color_right) {
    unsigned int screen[600][600];
    int x;
    for (x = 0; x < WIDTH; x++) {
        int y;
        for (y = 0; y < HEIGHT; y++) {
            unsigned int color;
            if (y < HEIGHT/2) {
                color = 0xffff00ff; // RGBA little endian
            } else {
                color = 0xffffff00; // RGBA little endian
            }

            screen[x][y] = color;
            BUFFER[WIDTH * x + y] = screen[x][y];
        }
    }
}
