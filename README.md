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

## ✍🏻 My Latest Posts on Hashnode

- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;data-engineer-cafe-data-engineering-center-of-excellence">Data Engineer Cafe: Data Engineering Center of Excellence ของคนไทย เพื่อคนไทย</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;banking-system-downtimes-in-thailand-64">ธนาคารไหนทำระบบได้ดีที่สุด? จากข้อมูลระบบออนไลน์ธนาคารไหนล่มมากที่สุดในรอบครึ่งปี 64</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;data-mesh-vs-kitchen">Data Mesh กับห้องครัว 🍳👩🏻‍🍳</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;dagster">มาลองเล่น Dagster เบื้องต้นกัน</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;my-desk-setup-for-remote-work">My Desk Setup for Remote Work</a>

## 🙇🏻‍♂️ Support

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/zkan)

---

<p align="center">This <i>README</i> file is generated <b>every day</b>!</br />
Last refresh: Wednesday, 20 April, 08:20 GMT+7<br />
This profile is inspired by <a href="https://medium.com/@th.guibert/how-to-create-a-self-updating-readme-md-for-your-github-profile-f8b05744ca91">Thomas Guibert</a></p>
