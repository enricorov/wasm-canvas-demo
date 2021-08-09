CLANG := clang
CLANG_ARGS := --target=wasm32 -emit-llvm -c -S

PROG_NAME := graphics
BIN_WASM := $(PROG_NAME).wasm

SRC_DIR = .
SRCS = $(wildcard $(SRC_DIR)/*.c)
# SRCS = $(patsubst %,$(SRC_DIR)/%,$(_SRCS))

all: $(PROG_NAME)

mock:
	$(info sources: $(SRCS))

$(PROG_NAME) : 
	@clang \
		--target=wasm32 \
		-O3 \
		-flto \
		-nostdlib \
		-Wl,--no-entry \
		-Wl,--export-all \
		-Wl,--lto-O3 \
		-Wl,-z,stack-size=100000 \
		-o $(BIN_WASM) \
		$(SRCS)

clean:
	rm -rf $(BIN_WASM)
	rm -f *.o
	rm -f *.ll