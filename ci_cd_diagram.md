
# Expo Release Pipeline (GitHub Actions + EAS)

![Screenshot 2025-07-18 at 12.19.34.png](Test%20task%20previews/Screenshot%202025-07-18%20at%2012.19.34.png)

Excalidraw Example: https://excalidraw.com/#json=u-FDdAWQ_Y2Rjkv9FmF8j,Lot2gBOPiM07m7mhtFU7iQ
## DEV Пайплайн

### 1. Push to feature/* branch
**Налаштування:**
- Конвенції назв (`feature/*`, `bugfix/*`)
- Захист гілок
- Автоматичні issue references
---
### 2. GitHub Actions CI (lint + test + build)
- Lint
- Юніт-тести
- Білд

---

### 3. eas build --profile preview
Створення внутрішнього dev-білду через EAS.

---

### 4. Expo Dev App QR / Internal link
Посилання або QR для відкриття білду без App Store.
Тут же можна додати external storage, щоб не використовувати
AppStore для дев білдів. Наприклад:
- App Center by Microsoft (Цей ми використовували на моєму попередньому проєкті,
так як ми працювали з Azure, а це все Microsoft середовище...)
- Firebase App Distribution
- Bitrise.io (з CI/CD)
- Diawi (https://www.diawi.com/)
- -TestFairy (https://testfairy.com/)



---

### 5. eas update --branch preview
OTA (Over-The-Air) оновлення JavaScript-коду, без необхідності перезбирати новий білд.
Найкраще використання тільки з невеликими багами або потенційними хотфіксами, 
що не стосуються деплою нових великих фіч.

- Канал (branch/channel)
- Автоматичне завантаження
- Можна вимкнути у production

---

## PROD Пайплайн

### 6. Merge to main

- Protected Branch
- Вимога PR Review
- Автозапуск пайплайну

---

### 7. GitHub Actions CI (test + prod build)
CI з повною перевіркою та білдом.

**Можливості:**
- Різні інтеграція
- Changelog генерація
- Slack/Discord повідомлення

---

### 8. eas build --profile production
Продакшн білд з сертифікатами.

---

### 9. Manual approval (optional)
Ручне затвердження перед публікацією. 

**Варіанти реалізації:**
- GitHub Actions environment manual review
- Slack інтеграція
- Email-підтвердження

---

### 10. eas submit → App Store / Play Store
Відправка білду у маркет.

**Налаштування:**
- App Store credentials
- Google Play JSON credentials
- `eas submit --platform ios/android`

---

## Що це нам дає
- Налаштовані всі процеси CI/CD проекту. 
- Валідація перед вивантаженням в ```prod```, щоб точно нічого лишнього не потрапило.
- Швидкий внутрішній тестинг
- Автоматизований продакшн-реліз
- OTA оновлення без повторного білду (hotfix, small UI changes - 100% NOT for new features deployment)


---
