cmake_minimum_required(VERSION 3.15)
project(sds_parsers LANGUAGES CXX)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Source files
set(SOURCES
    src/kvn_parser.cpp
    src/kvn_writer.cpp
    src/xml_sax_parser.cpp
    src/xml_writer.cpp
    src/json_parser.cpp
    src/json_writer.cpp
    src/navigation/omm_parser.cpp
    src/navigation/oem_parser.cpp
    src/navigation/cdm_parser.cpp
    src/navigation/opm_parser.cpp
    src/navigation/aem_parser.cpp
    src/navigation/tdm_parser.cpp
    src/navigation/xtce_parser.cpp
    src/navigation/gjn_parser.cpp
    src/navigation/czm_parser.cpp
    src/navigation/kml_parser.cpp
    src/navigation/gpx_parser.cpp
    src/navigation/cot_parser.cpp
    wasm_api.cpp
)

# Include directories
include_directories(include)

if(EMSCRIPTEN)
    # WASM build
    add_executable(sds_parsers ${SOURCES})
    set_target_properties(sds_parsers PROPERTIES
        SUFFIX ".js"
        LINK_FLAGS "\
            -s WASM=1 \
            -s MODULARIZE=1 \
            -s EXPORT_ES6=1 \
            -s EXPORTED_RUNTIME_METHODS=['ccall','cwrap','UTF8ToString','stringToUTF8','lengthBytesUTF8'] \
            -s EXPORTED_FUNCTIONS=['_malloc','_free'] \
            -s ALLOW_MEMORY_GROWTH=1 \
            -s NO_EXIT_RUNTIME=1 \
            -s ENVIRONMENT='web,node' \
            -s DISABLE_EXCEPTION_CATCHING=0 \
            --bind \
        "
    )
    # Output to dist/
    set_target_properties(sds_parsers PROPERTIES
        RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/../../dist"
    )
else()
    # Native build (for testing)
    add_library(sds_parsers_lib STATIC ${SOURCES})
    target_include_directories(sds_parsers_lib PUBLIC include)

    # Test executable
    add_executable(sds_parsers_test tests/test_roundtrip.cpp)
    target_link_libraries(sds_parsers_test sds_parsers_lib)
    target_include_directories(sds_parsers_test PRIVATE include)
endif()
