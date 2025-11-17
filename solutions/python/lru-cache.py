class LRUCache:
    def __init__(self, capacity: int):
        self.cache = {}
        self.order = []
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.order.remove(key)
        self.order.append(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) == self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        self.cache[key] = value
        self.order.append(key)

# Example
cache = LRUCache(2)
cache.put(1,1)
cache.put(2,2)
print(cache.get(1))
cache.put(3,3)
print(cache.get(2))