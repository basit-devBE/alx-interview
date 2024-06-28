To validate UTF-8 encoding in a programming language, you can use the following code snippet in Python:

```python
def validate_utf8(data):
    try:
        data.decode('utf-8')
        return True
    except UnicodeDecodeError:
        return False
```

This function takes a byte array as input and attempts to decode it as UTF-8. If the decoding is successful, it returns `True`, indicating that the data is valid UTF-8. Otherwise, it catches the `UnicodeDecodeError` exception and returns `False`.

Remember to pass your data as a byte array when calling this function.