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

- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;scraping-data-engineer-jobs-indeed">Scraping ข้อมูลประกาศรับสมัคร Data Engineer บนเว็บ Indeed.com</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;data-pipelines-pocket-reference-moving-and-processing-data-for-analytics">รีวีวหนังสือ &quot;Data Pipelines Pocket Reference: Moving and Processing Data for Analytics&quot;</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;configuration-file-parser-python">ลองเล่น  Configuration File Parser ของ Python</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;10-data-engineering-channels-i-recommend">10 Data Engineering Channels I Recommend</a>
- <a href="https:&#x2F;&#x2F;zkan.hashnode.dev&#x2F;running-bigquery-query-from-airflow-using-bigqueryexecuteoperator">Running BigQuery Query from Airflow using BigQueryExecuteOperator</a>

## 🙇🏻‍♂️ Support

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/zkan)

---

<p align="center">This <i>README</i> file is generated <b>every day</b>!</br />
Last refresh: Tuesday, 7 September, 07:39 GMT+7<br />
This profile is inspired by <a href="https://medium.com/@th.guibert/how-to-create-a-self-updating-readme-md-for-your-github-profile-f8b05744ca91">Thomas Guibert</a></p>
