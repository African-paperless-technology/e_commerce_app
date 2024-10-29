from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import logging
import time
import os

# Configuration de la journalisation
logging.basicConfig(level=logging.INFO)

# Constantes
URL = "http://front-aes-recette.burotopiris.com/"
CUSTOMER_CODE = "100002"
USERNAME = "Admin"
PASSWORD = "Docaposte1!"

def confirm_action(action):
    """Affiche un message de confirmation après chaque action."""
    logging.info(f"L'action '{action}' a été effectuée avec succès.")

def error_action(action, error):
    """Affiche un message d'erreur après une action échouée."""
    logging.error(f"Erreur lors de l'action '{action}' : {error}")

def test_connexion(driver):
    try:
        driver.get(URL)
        time.sleep(2)  # Pause pour permettre le chargement de la page
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "customercode"))
        ).send_keys(CUSTOMER_CODE)
        confirm_action("Connexion avec le code client")

        driver.find_element(By.NAME, "username").send_keys(USERNAME)
        confirm_action("Saisie du nom d'utilisateur")

        driver.find_element(By.NAME, "password").send_keys(PASSWORD)
        confirm_action("Saisie du mot de passe")

        driver.find_element(By.NAME, "password").send_keys(Keys.RETURN)
        confirm_action("Soumission du formulaire de connexion")
        time.sleep(2)  # Pause pour attendre le chargement de la page suivante

        WebDriverWait(driver, 10).until(
            EC.title_contains("Archive-e-Service (AeS)")
        )
        confirm_action("Connexion réussie à la page d'accueil")
    except Exception as e:
        error_action("Connexion", e)

def test_deposer_document(driver, file_path):
    try:
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'Déposer un document')]"))
        ).click()
        confirm_action("Clic sur 'Déposer un document'")
        time.sleep(2)  # Pause pour visualiser le clic

        # Sélectionner le type de document
        type_doc_select = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "TypeDoc3"))
        )
        type_doc_select.click()
        confirm_action("Sélection du type de document")
        time.sleep(2)  # Pause après le clic

        # Cliquer sur "Paie et déclaratifs"
        option_paie = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//h6[contains(text(), 'Paie et déclaratifs')]"))
        )
        option_paie.click()
        confirm_action("Clic sur 'Paie et déclaratifs'")
        time.sleep(2)  # Pause après le clic

        documents_individuels = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//h6[contains(text(), 'Documents individuels')]"))
        )
        documents_individuels.click()  # Cliquer pour dérouler
        confirm_action("Clic sur 'Documents individuels'")
        time.sleep(2)  # Pause après le clic

        bulletin_de_paie = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//span[contains(text(), 'Bulletin de Paie')]"))
        )

        # Cliquer sur la case à cocher
        checkbox = bulletin_de_paie.find_element(By.XPATH, "..//input[@type='checkbox']")
        checkbox.click()
        confirm_action("Clic sur la case à cocher")
        time.sleep(2)  # Pause après le clic

        # Attendre que le bouton "Enregistrer bulletin de paie" soit cliquable
        save_button = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='deposit-save']"))
        )

        time.sleep(4)

        # Remplir la date de paie
        date_paie_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "specialization.payTerm"))
        )
        date_paie_input.send_keys("25/10/2024")
        time.sleep(4)


        # Remplir le prénom du salarié
        prenom_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "specialization.employeeFirstName"))
        )
        prenom_input.send_keys("Jean")
        time.sleep(4)

        # Remplir le nom du salarié
        nom_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "specialization.employeeLastName"))
        )
        nom_input.send_keys("Dupont")
        time.sleep(4)

        # Remplir la date de naissance
        date_naissance_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "specialization.employeeDateOfBirth"))
        )
        date_naissance_input.send_keys("01/01/1990")
        time.sleep(4)

        # Remplir le numéro matricule
        matricule_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "specialization.employeeRegistrationNumber"))
        )
        matricule_input.send_keys("123456")
        time.sleep(4)

        # Remplir la société
        societe_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "specialization.society"))
        )
        societe_input.send_keys("Société Exemples")
        time.sleep(4)

        # Remplir le service
        service_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "specialization.service"))
        )
        service_input.send_keys("Ressources Humaines")
        time.sleep(4)

        # Attendre que le champ de dépôt soit visible
        dropzone = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//input[@data-testid='dropzone']"))
        )

        # Envoyer le chemin du fichier à l'élément input
        dropzone.send_keys(file_path)
        time.sleep(2)  # Attendre un peu pour visualiser le dépôt

        print("Document déposé avec succès.")
    except Exception as e:
        print(f"Erreur lors du dépôt du document: {e}")

        # Chemin du fichier à télécharger

        time.sleep(4)
        save_button.click()  # Cliquer sur le bouton
        confirm_action("Clic sur le bouton 'Enregistrer bulletin de paie'")
        time.sleep(2)  # Pause après le clic

        # Attendre 10 secondes pour visualiser le succès
        time.sleep(10)

        # Vérifier le succès
        WebDriverWait(driver, 10).until(
            lambda d: "Dépôt réussi" in d.page_source
        )
        logging.info("Dépôt de document réussi.")


def test_deconnexion(driver):
    try:
        time.sleep(5)  # Attendre que le dépôt soit terminé

        # Attendre que la page soit chargée
        WebDriverWait(driver, 10).until(
            EC.title_contains("Archive-e-Service (AeS)")
        )

        # Attendre que le bouton soit cliquable et cliquer dessus
        profile_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='header-profile']"))
        )
        profile_button.click()
        confirm_action("Clic sur le profil")
        time.sleep(2)  # Pause après le clic

        # Cliquer sur le bouton de déconnexion
        WebDriverWait(driver, 5).until(
            EC.visibility_of_element_located((By.XPATH, "//li[text()='Se déconnecter']"))
        ).click()
        confirm_action("Clic sur 'Se déconnecter'")
        time.sleep(2)  # Pause après le clic

        # Attendre que la page de déconnexion soit chargée
        WebDriverWait(driver, 5).until(
            EC.title_contains("DECONNEXION REUSSIE")
        )
        logging.info("Déconnexion réussie.")
    except Exception as e:
        error_action("Déconnexion", e)

def main():
    driver = webdriver.Chrome()
    try:
        test_connexion(driver)
        file_path = os.path.abspath("C:/Users/dell/Downloads/la-programmation-en-c-moderne.pdf")  # Remplace par le chemin réel de ton document
        test_deposer_document(driver,file_path)
        test_deconnexion(driver)  # Appel de la fonction de déconnexion
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
