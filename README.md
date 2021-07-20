# Hi there 👋

```py
from dataclasses import dataclass, field
from typing import List


@dataclass
class DataCraftsman:
    name: str = "Kan Ouivirach"
    pronouns: str = "he/him/his"
    current_role: str = "Senior Data Architect"
    passions: List[str] = field(
        default_factory=lambda: [
            "software-engineering",
            "data-engineering",
            "data-science",
        ]
    )

    def say_hi(self):
        return "Hi! Thanks for dropping by. :-)"


me = DataCraftsman()
print(me.say_hi())
```

💬 Ask me anything about software engineering, data engineering, data science, and Python! 🐍

## 📝 Blogs

- Hashnode: https://zkan.hashnode.dev/
- Medium: https://zkan.medium.com/
- DEV Community: https://dev.to/zkan/

## 🙇🏻‍♂️ Support

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/zkan)
